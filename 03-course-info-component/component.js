class CourseInfo extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        let title = this.getAttribute("title");
        let school_title = this.getAttribute("school_title");
        let registrar_code_display = this.getAttribute("registrar_code_display");
        let term_name = this.getAttribute("term_name");
        let instructors = this.getAttribute("instructors");
        let location = this.getAttribute("location");
        let meeting_time = this.getAttribute("meeting_time");
        let exam_group = this.getAttribute("exam_group");
        let description = this.getAttribute("description");
        let notes = this.getAttribute("notes");

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = `
        <style>
        * {
            box-sizing: border-box;
        }
        ul {
            width: 100%;
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        li.title {
            background-color: var(--list-title-bg-color, lightgray);
        }
        li {
            display: block;
            padding: 10px 15px;
            margin: 0;
            border: 1px solid #ddd;
        }
        </style>
        <ul>
           <li class="title"><strong>${title}</strong></li>
           <li><strong>${school_title}: ${registrar_code_display}</strong></li>
           <li><strong>Term:</strong>${term_name}</li>
           <li><strong>Course Instructor(s):</strong>${instructors}</li>
           <li><strong>Location:</strong>${location}</li>
           <li><strong>Meeting Time:</strong>${meeting_time}</li>
           <li><strong>Exam Group:</strong>${exam_group}</li>
           <li><strong>Course Description:</strong><p>${description}</p></li>
           <li><strong>Notes:</strong>${notes}</li>
        </ul>
        `;
    }
}

customElements.define("course-info", CourseInfo);