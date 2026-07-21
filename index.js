const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    });
},{
    threshold: 0.2
}
);

sections.forEach(section => observer.observe(section));


function mostrarHistoria(id){
        
        document.querySelectorAll('.story-box').forEach(box => {
            box.classList.remove('active');
        });
 
    
        const bloco = document.getElementById('story-' + id);
        if(bloco) bloco.classList.add('active');
 
        document.getElementById('charactersGrid').classList.add('hidden');
        document.getElementById('characterStory').classList.add('active');
    }
 
    function voltarPersonagens(){
        document.getElementById('charactersGrid').classList.remove('hidden');
        document.getElementById('characterStory').classList.remove('active');
    };