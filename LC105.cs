/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {

    public TreeNode BuildTree(int[] preorder, int[] inorder) {

        var rootPosMap = inorder.Select((value, index) => new {value, index})
            .ToDictionary(pair => pair.value, pair => pair.index);

        // iterative
        var stack = new Stack<(TreeNode, BuildParameters)>();
        var root = new TreeNode (preorder[0]); // preorder 0 is the root of the tree
        stack.Push ((root, new BuildParameters(0, 0, preorder.Length)));

        while (stack.Any())
        {
            var (node, bp) = stack.Pop();

            if (bp.Size <= 1) // Size <= 1 means leaf, no sub node available
            {
                continue;
            }

            var rootVal = preorder[bp.PrePos];
            var rootPos = rootPosMap[rootVal];

            var leftSize = rootPos - bp.InPos;
            var rightSize = bp.Size - leftSize - 1;


            if (rightSize > 0)
            {
                var rightInPos = rootPos + 1;
                var rightPrePos = 1 + leftSize + bp.PrePos; // +1 because need to bypass root(first item)
                var rightValue = preorder[rightPrePos];
                var rightNode = new TreeNode(rightValue);

                node.right = rightNode;
                stack.Push((rightNode, new BuildParameters(rightPrePos, rightInPos, rightSize)));
            }

            if (leftSize > 0)
            {
                var leftInPos = bp.InPos; // Also equals to: rootPos - leftSize;
                var leftPrePos = bp.PrePos + 1;
                var leftValue = preorder[leftPrePos];
                var leftNode = new TreeNode (leftValue);
                node.left = leftNode;
                stack.Push((leftNode, new BuildParameters(leftPrePos, leftInPos, leftSize)));
            }
        }

        return root;
    }
    
    struct BuildParameters
    {
        public BuildParameters(int prePos, int inPos, int size)
        {
            PrePos = prePos;
            InPos = inPos;
            Size = size;
        }

        public int PrePos;
        public int InPos;
        public int Size;
    }
}