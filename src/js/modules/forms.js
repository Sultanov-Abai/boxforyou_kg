const forms = () => {
    const form = document.querySelector('form');
    
    form.submit(e => {
        e.preventDefault();
        
        const request = new XMLHttpRequest();

        request.open("POST", ('mailer1/smart.php'));
        request.send();

        request.addEventListener('load', i => {
            if (request.status === 200) {
                document.querySelector('#thanks').style.display = 'block';
                i.find("input").value("");
                console.log('Nice!!!');
            } else {
                console.log('Something is bad');
            }
            return false;
        });
    });
};

export default forms;