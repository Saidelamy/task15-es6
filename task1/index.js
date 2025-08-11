function generateCourseInformation(options) {
  let defaultValues = {
    courseName: "Mern Stack",
    courseDuration: "4 months",
    courseOwner: "Sara",
  };

  let result = Object.assign({}, defaultValues, options);
  // console.log(result);
  return result;
}

generateCourseInformation({
  courseOwner: "said magdy",
  courseName: "Dot net",
  courseDuration: "9 month",
});
