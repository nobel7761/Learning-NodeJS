console.log('Line 1');

// getStudent(3)
//     .then(student => getStudentCourses(student))
//     .then(courses => getStudentMarks(courses))
//     .then(marks => console.log(marks));




async function studentData() {
    try {
        const student = await getStudent(4);
        const courses = await getStudentCourses(student);
        const marks = await getStudentMarks(courses);
        console.log(marks);
    }
    catch (error) {
        console.log(error)
    }
}
studentData();



console.log('Line 2');

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student from Database...');
            const student = { id: id, name: 'Nobel' };
            console.log(student);
            resolve(student);
        }, 3000);
    })

}

function getStudentCourses(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student Courses from Database...');
            const courses = { courses: ['JavaScript', 'Python'] }
            // console.log(courses)
            // resolve(courses)
            reject("ERROR Occured!")
        }, 3000)
    })

}

function getStudentMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Student Marks from Database...');
            resolve({ marks: { [courses.courses[0]]: 80, [courses.courses[1]]: 90 } }); //object er property jodi variable aakare likhte hoy tokhn sheta [] bracket er vitore likhte hoy.
        }, 3000)
    })

}