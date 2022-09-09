const skillsArray = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Php', 'C', 'C#'];


export function Skills(){

    return(
        <div className="skillsPageContainer">
            <div className="skillsContainer">
                <h3>Le tue skill</h3>
                <input type="search" id='skillSearch' placeholder="Cerca Skills"/>
                <div class="skillsList">
                    <div class="skill">
                        <span>Javascript</span>
                        <select class="selectYears">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='5p'>5+</option>
                        </select>
                        <div class="skillRemove"></div>
                    </div>
                    <div class="skill">
                        <span>React</span>
                        <select class="selectYears">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='5p'>5+</option>
                        </select>
                        <div class="skillRemove"></div>
                    </div>
                    <div class="skill">
                        <span>HTML</span>
                        <select class="selectYears">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='5p'>5+</option>
                        </select>
                        <div class="skillRemove"></div>
                    </div>
                    <div class="skill">
                        <span>CSS</span>
                        <select class="selectYears">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='5p'>5+</option>
                        </select>
                        <div class="skillRemove"></div>
                    </div>
                </div>
            </div>
            <div className="lavoroContainer">
                <h3>Sede di lavoro</h3>
                <input type="search" id='sedeSearch' placeholder="Città"/>
                <div class="cityList">

                </div>
            </div>
        </div>
    )
}