/*
Class MinHeap:
    Array heap = []

    Function push(val):
        // 1. 将 val 放入数组末尾
        // 2. 调用 siftUp(最后一个元素的索引)

    Function pop():
        // 1. 如果堆为空，返回错误
        // 2. 保存堆顶元素（heap[0]）用于返回
        // 3. 将数组末尾元素交换到 heap[0]
        // 4. 移除数组末尾元素
        // 5. 调用 siftDown(0)
        // 6. 返回保存的旧堆顶

    Function siftUp(i):
        // 逻辑：不断与父节点比较并交换，直到...

    Function siftDown(i):
        // 逻辑：在父、左、右中选出最小的，若父不是最小则交换并继续...
*/

class MinHeap {

    heap: Array<number> = [];

    push (val: number) : void {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    private siftUp(index: number) {
        while (index > 0) {
            const parent = Math.floor((index -  1) / 2);
            if (this.heap[parent] <= this.heap[index]) {
                return;
            }

            [this.heap[index], this.heap[parent]] = 
                [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    pop () : number | undefined {
        if (this.heap.length === 0) {
            return undefined
        }

        const val = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop(); // discard last
        if (this.heap.length > 0)
        {
            this.siftDown(0);
        }
        return val;
    }

    private siftDown(index: number) {
        while (index < this.heap.length) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (left > this.heap.length - 1) {
                return;
            }

            const minIndex = right > this.heap.length - 1 ?
                left : this.heap[left] < this.heap[right] ?
                left : right;

            if (this.heap[index] <= this.heap[minIndex]) {
                return;
            }

            [this.heap[index], this.heap[minIndex]] =
                [this.heap[minIndex], this.heap[index]];
            
            index = minIndex;
        }
    }
}
        
        /*
            add to the end of array
            push(val: T)
                heap.push (val):
                siftUp(heap.length - 1)

            pop ()
                value = heap[0]
                heap[0] = heap[heap.length - 1]
                heap[heap.length - 1] = undefined
                siftDown(0)

                return value
            // iteration
            siftUp (index: number)                
                while index > 0
                    parent = (index - 1) // 2
                    if heap[index] > heap[parent]
                        return // end of iteration, position reached

                    swap(heap[index], heap[parent])
                    index = parent

            /* dryrun:
                [0, 4, 6, 8], push (3)
                heap = [0, 4, 6, 8, 3]
                siftUp(4)
                index = 4 > 0
                parent = 3 // 2 = 1
                heap[parent] = heap[1] = 4 > 3
                swap(1, 4) => [0, 3, 6, 8, 4]
                index = 1
                index > 0, parent = 0 // 2 = 0
                heap[0] = 0, heap[1] = 3
                return                 **

            siftDown (index: number)
                while index < heap.length
                    left = index * 2 + 1
                    right = index * 2 + 2

                    if left > heap.length - 1
                        return // end of array

                    minIndex = right > heap.length - 1 ? left :
                        heap[left] < heap[right] ? left :
                        right

                    if heap[index] < heap[minIndex]
                        return

                    swap(heap[index], heap[minIndex])
                    index = minIndex
            /* dryrun
                [0, 2, 4, 6, 3]
                val = 0
                siftDown(0)
                [3, 2, 4, 6]
                index = 0
                left = 1, right = 2
                minIndex = right < heap.length =>
                    heap[1] = 2, heap[2] = 4, return left (1)
                minIndex = 1
                heap[0] = 3 > 2
                swap (0, 1) =>
                [2, 3, 4, 6]
                index = 1

                left = 3, right = 4
                minIndex = right == heap.length => 
                    heap[3] = 4, heap[4] = 6
                minIndex = 3(4)
                heap[1] = 3, 3 < 4
                    return
            

            // recursive
            siftUp(index: number)
                if index == 0:
                    return

                parent = (index - 1) // 2

                if heap[index] > heap[parent]
                    // in position, return
                    return

                if heap[index] < heap[parent]:
                    swap (heap[index], heap[parent])

                siftUp (parent)

            siftDown(index: number):
                if index >= heap.length
                    return // in position

                // compare with [left, parent, right]
                left = index * 2 + 1
                right = index * 2 + 2

                if right >= heap.length
                    if left >= heap.length
                        return
                    if heap[index] > heap[left]:
                        swap (heap[index], heap[left])
                        return siftDown (left)

                minIndex = heap[left] < heap[right] ? left : right

                if heap[index] > heap[minIndex]:
                    swap (heap[index], heap[minIndex])
                    siftDown(minIndex)

            [0, 2, 4, 6], push (3)

            [0, 2, 4, 6, 3], index(3) = 4
            parent = 3 // 2 = 1
            heap[4] = 3， heap[1] = 2
            3 > 2, return
            => heap: [0, 2, 4, 6, 3]

            [0, 2, 3, 6, 4], pop
            value = 0            
            heap[0] = heap[5 - 1] = 4
            delete heap[4]
            heap: [4, 2, 3, 6]
            siftdown (0) =>
                index = 0, left = 1, right = 2
                left, right not null
                heap[1] = 2, heap[2] = 3, minIndex = 1
                heap[1] = 2, heap[0] = 4, swap:
                [2, 4, 3, 6]
                siftDown (1) =>
                    index = 1 < 4
                    left = 2 + 1 = 3
                    right = 2 + 2 = 4
                    4 >= 4
                    heap[1] > heap[3] (4 > 3)
                    swap 1, 3 => heap: [2, 3, 4, 6]
                    return siftDown (3)
                        => index = 3 < 4
                            left = 6 + 1 = 7
                            right = 6 + 2 = 8
                            right > length
                                left > length
                                return
                    return
                return
                heap: [2, 3, 4, 6]
            return

        */

