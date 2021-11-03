const baseUrl = 'https://parallelum.com.br/fipe/api/v1';
const selectVehicle = document.querySelector('#select-type-vehicle');
const selectBrandVehicle = document.querySelector('#select-brand-vehicle');
const selectModelVehicle = document.querySelector('#select-model-vehicle');
const selectAgeVehicle = document.querySelector('#select-age-vehicle');

selectVehicle.addEventListener('click', () => {
    fetch(`${baseUrl}/
        ${selectVehicle.value}/marcas`)
        .then(res => res.json())
        .then(json => {
            selectBrandVehicle
                .innerHTML = 
                    `<option value="" selected>
                        Selecione uma opção
                    </option>`
            for (const key in json) {
                selectBrandVehicle
                .innerHTML += 
                `<option value='${json[key].codigo}'>
                    ${json[key].nome}
                </option>`;
            }
        });
});

selectBrandVehicle.addEventListener('click', () => {
    
    fetch(`${baseUrl}/
    ${selectVehicle.value}/marcas/
    ${selectBrandVehicle.value}/modelos`)
    .then(res => res.json())
    .then(json => {
            selectModelVehicle
                .innerHTML =
                    `<option value="" selected>
                        Selecione uma opção
                    </option>`
            for (const key in json.modelos) {
                selectModelVehicle
                    .innerHTML += 
                    `<option value='${json.modelos[key].codigo}'>
                        ${json.modelos[key].nome}
                    </option>`;
            }
            // console.log(json);
        });
});

selectModelVehicle.addEventListener('click', () => {
    
    fetch(`${baseUrl}/
    ${selectVehicle.value}/marcas/
    ${selectBrandVehicle.value}/modelos/
    ${selectModelVehicle.value}/anos`)
    .then(res => res.json())
    .then(json => {
            selectAgeVehicle
                .innerHTML =
                    `<option value="" selected>
                        Selecione uma opção
                    </option>`
            for (const key in json) {
                selectAgeVehicle
                    .innerHTML += 
                    `<option value='${json[key].codigo}'>
                        ${json[key].nome}
                    </option>`;
            }
        });
});

selectAgeVehicle.addEventListener('click', () => {
    fetch(`${baseUrl}/
        ${selectVehicle.value}/marcas/
        ${selectBrandVehicle.value}/modelos/ 
        ${selectModelVehicle.value}/anos/ 
        ${selectAgeVehicle.value}`)

            //Imprimindo o resultado
            .then(res => res.json())
                .then(json => {
                    document
                        .querySelector('#table_vehicle')
                        .innerHTML =
                            `<td>Tipo Veículo: ${selectVehicle.value}</td>`

                    document
                        .querySelector('#table_brand_vehicle')
                        .innerHTML =
                            `<td>Marca: ${json.Marca}</td>`

                    document
                        .querySelector('#table_model_vehicle')
                        .innerHTML =
                        `<td>Modelo: ${json.Modelo}</td>`

                    document
                        .querySelector('#table_age_vehicle')
                        .innerHTML =
                        `<td>Ano: ${json.AnoModelo}</td>`

                    document
                        .querySelector('#table_value_vehicle')
                        .innerHTML =
                        `<td>Valor: ${json.Valor}</td>`
            });
});
