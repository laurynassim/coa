let hasLicense = document.getElementById('has_license')
let categories = document.getElementById('categories')
let for_other_person = document.getElementById('for_other_person')

hasLicense.addEventListener('change',
    function (event) {
        console.log('mano pasirinkimas: ' + event.target.value)
            console.log(event.target.value)

        // jeigu event.target.value taip
        if (event.target.value === 'true') {
                categories.style.display = 'block';
                for_other_person.style.display = 'none';

        }

        //jeigu pasirinko ne
        if (event.target.value === 'false') {
            //rodysiu ar rezervuoju kitam zmogui
                for_other_person.style.display = 'block';
                categories.style.display = 'none';
        }

        // jeigu nieko nepasirinko arba pasirinko varianta pasirinkti
        if (event.target.value === 'nothing_selected') {
                for_other_person.style.display = 'none';
                categories.style.display = 'none';
        }
    }
)
