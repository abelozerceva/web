// html навыка с линией прогресса
function Skill(skill) {
    return `<div class="skill-container">
                <div style="flex: 1;">${skill.name}</div>
                <div class="progress-wrapper" style="margin-bottom: 0;flex: 4">
                    <div class="progress-line" style="background-color: ${skill.color !==null?skill.color:'#4ebdd4'}; width:${skill.val}"></div>
                </div>
            </div>`
}
// объединение навыков в список
function SkillsBlock(skills) {
    return `<div class="skills_block">
        ${skills.map(Skill).join('')}
    </div>`
}
// описание навыка
let skills = [
    {
        name: 'JavaScript',
        val: '80%', // процента изученности навыка
        color: '#31e67c'
    },
    {
        name: 'Vue.js',
        val: '50%',
        color: '#017bc2',
    },
    {
        name: 'CSS',
        val: '85%',
        color: '#d4057e'
    }
];
// добавление списка навыков внутрь класса skills-sections
$('.skills-sections')[0].innerHTML = SkillsBlock(skills);