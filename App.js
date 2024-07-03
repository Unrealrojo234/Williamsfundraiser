class Content extends React.Component{
    
    
    render(){
        $("#root").css("display","none")
        
        
        window.addEventListener('load',function(){
            $("#loader").css("display","none");
            $("#root").css("display","block")
            
        })
       
       
       
        return(
            
            <div>
                <div>
                   <h1 className="text-center animate__animated animate__bounce " > William's Fund Raiser For University</h1>
                   <br/>
                   <h3 className="text-center" >About:</h3>
                   <div id="top" className="animate__animated animate__backInLeft">
                        <div  id="profile"></div>
                        <q >Hello, I'am William Omondi, I did my <abbr title="Kenya Certificate of Secondary Education">K.C.S.E</abbr> back in 2023 at <span className="text-danger">Ramba Boys' High School</span> and I'am to join University this year, in August 27</q>
                   </div>
                </div>
                <hr/>
              {/*   <br/> */}
                <div className="animate__animated animate__backInLeft ">
                    <h3 className="text-center target" >My <abbr title="Kenya Certificate of Secondary Education">K.C.S.E</abbr> Result</h3>
                    <table className="table table-info target"  >
                        <thead >
                            <tr>
                                <th scope="col">Eng</th>
                                <th scope="col">Mat</th>
                                <th scope="col">Kis</th>
                                <th scope="col">Chem</th>
                                <th scope="col">Bio</th>
                                <th scope="col">Phy</th>
                                <th scope="col">Geo</th>
                                <th scope="col">His</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C+</td>
                                <td>A</td>
                                <td>B+</td>
                                <td>B+</td>
                                <td>B+</td>
                                <td>B</td>
                                <td>B+</td>
                                <td>C+</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 className="animate__animated animate__backInLeft">Average Grade: B+</h5>
                </div>
                <hr/>
                <div  className="text-center animate__animated animate__backInLeft" >
                    <h3>Course And University</h3>
                    <p>I have gotten the chance to join <span className="text-danger">University Of Eldoret</span> to pursue a Bachelor of Science in <span className="text-danger">Mechanical Engineering</span>. I'am deeply happy to have gotten this rare opoturnity to proceed with my education at this prestigious University</p>
                    <div className="text-center">
                        <a href="admission letter\admission.pdf" download="Admission Letter"><button className="btn btn-primary">Admission Letter pdf <i class="fa-solid fa-download"></i></button></a>
                    </div>
                </div>
                <hr/>
                <div className="animate__animated animate__backInLeft">
                    <h3 className="text-center">Current Situation</h3>
                    <p>I'am currently facing a challlenge of inadequate money  to fund my  first year education at the University.</p>
                </div>
                <hr/>
                <div className="animate__animated animate__backInLeft">
                    <h3 className="text-center">How You Can Help Me</h3>
                    <p>Well, firstly  I thank you for going this website and you can help me to join the University by either contributing for this fund raiser. <strong>(Any Amount I Will greatley Appreciate) </strong>or by sharing this fundraiser website to as many people as you can.</p>
                </div>
                <hr/>
                <div className="animate__animated animate__backInLeft">
                    <h1 className="text-center">Contacts</h1>
                    <h4><span className="text-success">M-PESA:</span> <span className="text-danger">0728485832</span></h4>

                    <h3 id="share">Share 😊 <i class="fa-regular fa-hand-point-down fa-2xl animate__animated animate__heartBeat animate__infinite" style={{color: "#987766"}} ></i></h3>
                    <br/>
                    <div className="sharethis-inline-share-buttons"></div>
                    <br/>
                    <p>&copy; 2024 Rojo's Ltd All Rights Reserved</p>                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<Content/>,document.getElementById("root"));