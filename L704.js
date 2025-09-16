function search(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = (left + right) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
;
var k = [-1, 0, 3, 5, 9, 12];
var result = search(k, 9);
console.log(result);
