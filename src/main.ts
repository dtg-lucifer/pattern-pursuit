const para = document.querySelectorAll(".T");
const headingOne = document.querySelector("#H_ONE");

if (para.length > 0) {
    const paraOneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            } else {
                entry.target.classList.remove("appear");
            }
        });
    });

    para.forEach((para) => {
        paraOneObserver.observe(para);
    });
}

if (headingOne) {
    const headingOneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("pop");
            } else {
                entry.target.classList.remove("pop");
            }
        });
    });

    headingOneObserver.observe(headingOne);
}
