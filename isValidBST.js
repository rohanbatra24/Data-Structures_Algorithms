// check if it is a valid Binary Search Tree

function isValidBST(root, min, max) {
	if (!root) {
		return true;
	}

	if (min !== undefined && root.val <= min) {
		return false;
	}

	if (max !== undefined && root.val >= max) {
		return false;
	}

	if (root.left && root.left.val >= root.val) {
		return false;
	}

	if (root.right && root.right.val <= root.val) {
		return false;
	}

	return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}
