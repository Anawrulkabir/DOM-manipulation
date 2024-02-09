// adding a complete new section by innerHTML

// where to add - it is the parent element
const main = document.getElementById('main')


// what to add - it is the child content that i want to add 
const newSection = document.createElement('newSection')
// we need to use back tick `` to add html element 
newSection.innerHTML = `<section id="section-10">
<div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>
</section>`;


// adding the child (append) to the parent element
main.appendChild(newSection);


// now the styling is work properly. previously we declare the styles before the 
// newSection is created . thats why it is not applying to the newSection











const sections = document.getElementsByTagName('section');
for (const section  of sections) {
    // section.style.border = '1px solid gray'
    section.style.margin = '10px'
    section.style.borderRadius = '15px'
    section.style.padding = '10px'
    section.style.display = 'flex'
    section.style.justifyContent = 'center' 
}

const mains = document.getElementsByTagName('main');
for (const main of mains) {
    main.style.display = 'grid'
    main.style.gridTemplateColumns = '1fr 1fr 1fr'
    
}

// adding class to sections
const sectionsDiv = document.querySelectorAll('.card .card-body h2')
for (const sectionDiv of sectionsDiv) {
    sectionDiv.classList.remove('card-title')
    sectionDiv.classList.add('text-4xl')
}

