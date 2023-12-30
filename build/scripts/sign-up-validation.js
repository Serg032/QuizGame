const signUpValidation = (name, password) => {
    if (!name) {
        createWarning();
        return false;
    }
    else if (!password) {
        createWarning();
        return false;
    }
    else if (!name && !password) {
        createWarning();
        return false;
    }
    return true;
};
const createWarning = () => {
    const warningDiv = document.createElement("div");
    warningDiv.style.width = "10rem";
    const warningSpan = document.createElement("span");
    warningSpan.textContent = "Name and Password need to be filled";
    warningDiv.appendChild(warningSpan);
    document.body.appendChild(warningDiv);
};
export default signUpValidation;
