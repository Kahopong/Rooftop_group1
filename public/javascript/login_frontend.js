const ListAllCourseTemplate = ` 
{{#each course}}
  <div class='card-container col-lg-4' data-id="{{id}}">
  <a href="/index/course" class="course-title"> 
      <div class="card" >
          <img class="card-img-top" src="{{image}}" onerror="this.src='./lego.jpeg';" alt="card-img-cap">
          <div class="card-body" >
          <div class='d-flex justify-content-between'>
                    <span class="card-text"><h5>{{title}}</h5></span>
                 
                </div>
              <h6 class="card-subtitle mb-2 text-muted">{{category}}</h6>
              <h6><i class="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;{{date}}</h6>
              <div>
                  <span class="card-text float-left"><i class="far fa-clock"></i>&nbsp;&nbsp;{{duration}} Hours</span>
                  <span class="card-text float-right"> HKD$ {{price}}</span>
              </div>
          </div>
      </div>
      </a>  
  </div>
  {{/each}}`;
const ListAllCourseFunction = Handlebars.compile(ListAllCourseTemplate);

const ListOneCourseTemplate = `  
<div class="container">
    <div class="row course">
        <div class="col-lg-8 col-sm-12 ">
            <!-- Title + Fav Row -->
            <div class="row course_head">
                <div class="title col-lg-11"><h4 class="courseinfo_h4">{{title}}</h4></div>
              
            </div>
            <div class="course_feature">
                <div class="row">
                    <div class="col-lg-6 ">
                        <i class="fas fa-users courseinfo_i"></i>
                        <span>Age Range: {{ageRange}}</span>
                    </div>
                    <div class="col-lg-6 ">
                        <i class="fas fa-chart-pie courseinfo_i"></i>
                        <span>Quota: {{quota}}</span>
                    </div>
                </div>
            </div>
            <div class="course_para">
                
            </div>

            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <p class="course_specialnote_text">{{specialNote}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-12 courseInfo">
            <div class="courseInfo_container">
                <div class="courseInfo_title text-center">Course Details</div>
                    <table class="courseInfo_content">
                        <col style="width:50%">
                        <col style="width:200%">
                    
                        <tbody>
                        
                        <tr>
                            <td class="icon_col"><i class="fas fa-calendar courseinfo_i"></i></td>
                            <td class="info_col">{{date}}</td>
                        </tr>
                        <tr>
                            <td class="icon_col"><i class="fas fa-clock courseinfo_i"></i></td>
                            <td class="info_col">{{timeStart}} - {{timeEnd}}</td>
                        </tr>
                        <tr>
                            <td class="icon_col"><i class="fas fa-tag courseinfo_i"></i></td>
                            <td class="info_col">HKD$ {{price}}</td>
                        </tr>
                        </tbody>
                    </table>
                 <button type="button" class="booknow btn" id="loginandbook">LOGIN AND BOOK</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

const ListOneCourseFunction = Handlebars.compile(ListOneCourseTemplate);

const displayIndexCourses = (data) => {
    $("#All_course_card").html(ListAllCourseFunction({ course: data }));
};

const displayOneCourses = (data) => {
    $("#Section2").html(ListOneCourseFunction(data));
};

const coursePara2Template = `
<div class="course_specialnote">
  <div class="row">
    <div class="col-lg-12 course_specialnote_title">
        <i class="fas fa-comment courseinfo_i"></i>
        <span>About This Course</span>
        </div>
        <p class="course_about_text">{{about}}</p>
  </div>
</div>
                    
<div class="course_specialnote">
  <div class="row">
    <div class="col-lg-12 course_specialnote_title">
      <i class="fas fa-comment courseinfo_i"></i>
        <span>Special Notes</span>
    </div>
        <p class="course_specialnote_text">{{specialNote}}</p>
    </div>
</div>`;

const coursePara2Function = Handlebars.compile(coursePara2Template);


const edittedTime = (res_data) => {
    return res_data.map((x) => {
        x.date = x.date.split("T")[0];
        x.timeStart = x.timeStart.split(":").map((x) => parseInt(x));
        x.timeEnd = x.timeEnd.split(":").map((x) => parseInt(x));
        let min =
            (x.timeEnd[0] - x.timeStart[0]) * 60 + (x.timeEnd[1] - x.timeStart[1]);
        let hour = min / 60;
        x.duration = hour;
        return x;
    });
};

function edittedTime2(data) {
    data.price = data.price.split(".")[0];
    data.date = data.date.split("T")[0];
    data.timeStart = data.timeStart.slice(-8, -3);
    data.timeEnd = data.timeEnd.slice(-8, -3);
    console.log("In edittedTime2 function", data);
    return data;
}

function image(res_data) {
    return res_data.map((course) => {
        course.image = `./course${course.id}.jpeg`;
        return course;
    });
}

$(() => {
    axios
        .get("/display")
        .then((res) => {
            // overall info at the top
            //insert data into handlebars
            displayIndexCourses(image(edittedTime(res.data)));
            // console.log(res.data);
        })
        .catch((err) => console.log(err));

        $("#All_course_card").on("click", ".course-title", (event) => {
            let course_id = $(event.currentTarget)
                .closest(".card-container")
                .data("id");
            console.log("courseid", course_id);
            sessionStorage.setItem("course_id", course_id);
    
            // window.location.href = '/index/course';
        });

        axios
        .get(`/display/${sessionStorage.getItem("course_id")}`)
        .then((res) => {
            displayOneCourses(edittedTime2(res.data[0]));

            console.log(res.data[0]);
        })
        .catch((err) => console.log(err));

        axios
        .get(`/host/course_para/${sessionStorage.getItem("course_id")}`)
        .then((res) => {
            // displayOneCourses(res.data[0]);
            $(".course_para").html(coursePara2Function(res.data[0]));
        })
        .catch((err) => console.log(err));

})

const uploadPicTemplate = `<div class="carousel-item active">
<img src="{{image}}" onerror="this.src='./lego.jpeg';" class="d-block mx-auto" alt="...">
</div>
<div class="carousel-item">
<img src="{{image}}" onerror="this.src='./lego.jpeg';" class="d-block mx-auto" alt="...">
</div>`;

const uploadPicFunction = Handlebars.compile(uploadPicTemplate);

$(() => {
    let course_id = sessionStorage.getItem("course_id");
    $("#carousel").html(
        uploadPicFunction({ image: `./course${course_id}.jpeg` })
    );
});

$("#Section2").on("click", "#loginandbook",() => {
 
    window.location.href = '/login';
});