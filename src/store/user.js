export default {
    state: {
        firstName: 'Name',
        lastName: 'Surname',
        studentCode: 'CODE1234',
        loggedInAt: [],
        loggedIn: false,
        isEditing: true,
    },
    mutations: {
        login(state) {
            state.loggedIn = true;
            const timestamp = new Date().toLocaleString();
            state.loggedInAt = timestamp;
        },
        logout(state){
            state.loggedIn = false;
        },
        resetUser(state) {
            state.firstName = 'Name';
            state.lastName = 'Surname';
            state.studentCode = 'CODE1234';
            state.loggedInAt = [];
            state.loggedIn = false;
        },
        setFirstName(state, firstName) {
            state.firstName = firstName;
        },
        setLastName(state, lastName) {
            state.lastName = lastName;
        },
        setStudentCode(state, studentCode) {
            state.studentCode = studentCode;
        },
        toggleEditing(state) {
            state.isEditing = !state.isEditing;
        },
    },
    actions: {
    },
    getters: {
    },
};
