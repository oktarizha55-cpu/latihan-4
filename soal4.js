const studentData = {
  name: "Andi",
  java_programming_score: 80,
  python_programming_score: 100,
  javascript_programming_score: 80,
  infoStudent: function () {
    return (
      "Name :" +
      this.name +
      "\n" +
      "Java Score :" +
      this.java_programming_score +
      "\n" +
      "Python Score :" +
      this.python_programming_score +
      "\n" +
      "JS Score :" +
      this.javascript_programming_score
    );
  },
};

studentData["id_number"] = "1102020";
console.log(studentData);
