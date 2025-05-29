const methodEx = "체외 유전자 치료는 환자의 세포를 체외로 꺼내어 유전자를 수정한 후 다시 체내로 주입하는 방법으로, 주로 줄기 세포를 이용합니다.";
const methodIn = "체내 유전자 치료는 유전 물질을 직접 환자의 체내에 주입하는 방법으로, 주로 바이러스 벡터를 이용하여 유전자를 전달합니다.";

const trendDescriptions = {
    crispr: "CRISPR-Cas9 시스템은 유전자 편집의 정확성과 효율성이 크게 향상되어 다양한 질병 치료에 적용할 수 있는 가능성이 높아졌고, 현재 여러 유전병 및 암 치료에 대한 임상실험이 진행되고 있습니다.",
    approval: "유전자 치료제는 FDA와 같은 규제 기관의 승인을 받아 상용화되고 있습니다. 예를 들어 유전성 망막 질환 치료제 Ruxturna, 척수성 근위축증 치료제 Zolgensma 등이 있습니다.",
    safety: "차세대 벡터: 더 안전하고 효율적인 벡터 개발이 활발히 진행되고 있습니다. 예를 들어 바이러스 벡터, 나노입자 등을 연구하는 것입니다."
};

document.querySelectorAll('.method-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const desc = btn.dataset.method === 'ex' ? methodEx : methodIn;
        document.getElementById('method-description').textContent = desc;
    });
});


document.querySelectorAll('.trend-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.trend-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const desc = trendDescriptions[btn.dataset.trend];
        document.getElementById('trend-description').textContent = desc;
    });
});


document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const opinion = document.getElementById('opinion').value.trim();

    if (!opinion) return;

    const opinionsDiv = document.getElementById('opinions');
    const entryDiv = document.createElement('div');
    entryDiv.className = 'opinion-entry';

    entryDiv.innerHTML = `<strong>${name ? name : '익명'}</strong>: ${opinion}`;
    opinionsDiv.prepend(entryDiv);

    document.getElementById('name').value = '';
    document.getElementById('opinion').value = '';
});