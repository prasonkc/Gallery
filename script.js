// const dropZone = document.querySelector('.drop_zone');

// dropZone.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     dropZone.classList.add('dragover');
// });

// dropZone.addEventListener('dragleave', () => {
//     e.preventDefault(); 
//     dropZone.classList.remove('dragover'); 
// });

// dropZone.addEventListener('drop', (e) =>{
//     e.preventDefault
//     dropZone.classList.remove('dragover');

//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith('image/')) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const container = document.createElement('div');
//             container.className = 'image_container';

//             const img = document.createElement('img');
//             img.src = e.target.result;

//              container.appendChild(img);
//              gallery.insertBefore(container, dropZone);
//         }
//     }
//     reader.readAsDataURL(file);
// })


