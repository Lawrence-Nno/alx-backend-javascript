export default function setFromArray(anyArray) {
	if (Array.isArray(anyArray)) {
		return new Set(anyArray);
	}
	return Set();
}
