console.log('Line 1');

const student = getStudent(1);


console.log('Line 2');

function getStudent(id) {
    setTimeout(() => {
        console.log('Fetching Student Data.....');
        return { id: id, name: 'Rahim' };
    }, 3000);
}

console.log(student);