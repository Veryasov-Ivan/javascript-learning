// Day 20

const userProfile = {
    userName: "Ivan",
    email: "ADMIN@mail.com",
    isVIP: true,
}; 

const validator = {
    checkAndFormat: function(profile) {
        userProfile.email = userProfile.email.toLowerCase()
        if (profile.isVIP === true) {
            console.log(`User ${userProfile.userName} (Email: ${userProfile.email}) has been successfully verified.`)
        } else {
            console.log(`Error: invalid user status!`)
        }
    }
};

validator.checkAndFormat(userProfile);
