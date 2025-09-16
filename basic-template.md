# 算法基础操作模板库


## 1. 深度优先搜索（DFS）遍历模板

```typescript
function dfs(node: number, visited: Set<number>, graph: number[][]) {
    if (visited.has(node)) return;
    visited.add(node);
    
    for (const neighbor of graph[node]) {
        dfs(neighbor, visited, graph);
    }
}
```

### 适用问题类型
- 图的连通分量计数
- 岛屿数量
- 路径存在性判断
- 递归子结构遍历等

***

## 2. 广度优先搜索（BFS）遍历模板

```typescript
function bfs(start: number, graph: number[][]): number[] {
    const queue = [start];
    const visited = new Set([start]);
    const result = [];
    
    while (queue.length) {
        const node = queue.shift()!;
        result.push(node);
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}
```

### 适用问题类型
- 最短路径问题（无权图）
- 连通块发现
- 多源扩散模拟
- 层级遍历等

***

## 3. 并查集（Union-Find）模板

```typescript
const parent = Array(n).fill(0).map((_, i) => i);

function find(x: number): number {
    if (parent[x] !== x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

function union(x: number, y: number) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
        parent[rootX] = rootY;
    }
}
```

### 适用问题类型
- 动态连通性问题
- 联通块合并计数
- 环检测
- 网络连通性等

***

## 4. 双指针模板

```typescript
// 示例：快慢指针找链表中点
let slow = head, fast = head;
while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
}
```

### 适用问题类型
- 链表中点及回文判断
- 数组区间和/滑动窗口
- 寻找重复元素
- 双端遍历等

***

## 5. 滑动窗口模板（HashSet版本）

```typescript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (i > k) set.delete(nums[i - k - 1]);
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
}
```

### 适用问题类型
- 字符串/数组中重复元素检测
- 最长子串问题
- 连续区间满足条件
- 子数组变换等

***

## 6. 二分查找模板

```typescript
function binarySearch(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### 适用问题类型
- 有序数组查找
- 寻找边界下标
- 旋转数组查找
- 数值域判断等

***

## 7. 动态规划基础模板

```typescript
function dpSolve(n: number): number {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0; dp[1] = 1;  // 根据问题初始化
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // 状态转移方程示例
    }
    return dp[n];
}
```

### 适用问题类型
- 斐波那契类问题
- 背包问题
- 子序列/子串最长问题
- 状态压缩等

***

## 8. 前缀和模板

```typescript
const prefixSum = new Array(nums.length + 1).fill(0);
for (let i = 1; i <= nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
}
// 区间和：prefixSum[j] - prefixSum[i]
```

### 适用问题类型
- 区间求和
- 子数组和判断
- 频率统计
- 速查累积数据等

***

## 9. 堆与优先队列（模拟大顶堆）

```typescript
// 负数数组做大顶堆（JS默认小顶堆）
const heap = new MinPriorityQueue({ priority: x => -x });
// 或用手写堆结构，或先排序模拟
```

### 适用问题类型
- 取最大/最小k个元素
- 模拟优先级处理队列
- 动态中位数
- 合并排序等

***

## 10. 递归分治模板

```typescript
function divideAndConquer(arr: number[], left: number, right: number): number {
    if (left >= right) return arr[left];
    const mid = left + ((right - left) >> 1);
    const leftVal = divideAndConquer(arr, left, mid);
    const rightVal = divideAndConquer(arr, mid + 1, right);
    // 合并过程示例
    return Math.max(leftVal, rightVal);
}
```

### 适用问题类型
- 归并排序
- 快速选择
- 分治优化
- 区间统计等

***
