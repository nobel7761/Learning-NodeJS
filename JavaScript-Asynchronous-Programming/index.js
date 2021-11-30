console.log('Line 1');

getStudent(2, (student) => {
    console.log(student);
})

console.log('Line 2');

function getStudent(id, callback) {
    setTimeout(() => {
        console.log('Fetching Student Data...');
        callback({ id: id, name: 'Nobel' });
    }, 3000)
}