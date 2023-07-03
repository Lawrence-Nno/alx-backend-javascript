export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((sum, each) => sum + each.id, 0);
  }
  return [];
}
