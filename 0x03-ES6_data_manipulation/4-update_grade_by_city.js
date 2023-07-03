export default function updateStudentGradeByCity(arrOfStudents, city, newGrades) {
  if (!Array.isArray(arrOfStudents)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return arrOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
