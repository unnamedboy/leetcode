public class MyCircularDeque {
    private int[] _data;
    private int _front;
    private int _capacity;
    private int _size;

    public MyCircularDeque(int k) {
        _data = new int[k];
        _capacity = k;
        _front = 0;
        _size = 0;
    }
    
    public bool InsertFront(int value) {
        if (IsFull()) return false;
        
        // front 往前走一步（循环）
        _front = (_front - 1 + _capacity) % _capacity;
        _data[_front] = value;
        _size++;
        return true;
    }
    
    public bool InsertLast(int value) {
        if (IsFull()) return false;
        
        // 计算队尾位置：front + size
        int rear = (_front + _size) % _capacity;
        _data[rear] = value;
        _size++;
        return true;
    }
    
    public bool DeleteFront() {
        if (IsEmpty()) return false;
        
        _front = (_front + 1) % _capacity;
        _size--;
        return true;
    }
    
    public bool DeleteLast() {
        if (IsEmpty()) return false;
        
        _size--;
        return true;
    }
    
    public int GetFront() {
        if (IsEmpty()) return -1;
        return _data[_front];
    }
    
    public int GetRear() {
        if (IsEmpty()) return -1;
        
        int rear = (_front + _size - 1) % _capacity;
        return _data[rear];
    }
    
    public bool IsEmpty() {
        return _size == 0;
    }
    
    public bool IsFull() {
        return _size == _capacity;
    }
}
