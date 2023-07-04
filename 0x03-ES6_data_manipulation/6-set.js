// This function turns an array into a set
export default function setFromArray(anyArray) {
  if (Array.isArray(anyArray)) {
    return new Set(anyArray);
	}
	return Set();
}
