function Skill(skill) {
    return `<div class="skill-container">
                <div style="flex: 1;">${skill.name}</div>
                <div class="progress-wrapper" style="margin-bottom: 0;flex: 4">
                    <div class="progress-line" style="background-color: ${skill.color !==null?skill.color:'#4ebdd4'}; width:${skill.val}"></div>
                </div>
            </div>`
}

function SkillsBlock(skills) {
    return `<div class="skills_block">
        ${skills.map(Skill).join('')}
    </div>`
}

let skills = [
    {
        name: 'JavaScript',
        val: '80%',
        color: '#4ebdd4'
    },
    {
        name: 'Vue.js',
        val: '50%',
        color: '#4ebdd4',
    },
    {
        name: 'CSS',
        val: '85%',
        color: '#4ebdd4'
    }
];

$('.skills-sections')[0].innerHTML = SkillsBlock(skills);