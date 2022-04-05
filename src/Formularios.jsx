import React, { useState } from 'react'

// export const Formularios = () => {

//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//             alert('El formulario se a enviado');
//     }

//     return (
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>

//                 <label htmlFor="nombre">Nombre</label>
//                 <input
//                     type="text"
//                     name="nombre"
//                     id="nombre"
//                     value={nombre}
//                     onChange={(e) => setNombre(e.target.value)}
//                 />
//                 <p>Elige tu sabor JS favorito</p>

//                 <input
//                     type="radio"
//                     id="vanilla"
//                     name="sabor"
//                     value="vanilla"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor="vanilla">Vanilla</label>

//                 <input
//                     type="radio"
//                     id="react"
//                     name="sabor"
//                     value="react"
//                     onChange={(e) => setSabor(e.target.value)}
//                     defaultChecked
//                 />
//                 <label htmlFor="react">ReactJs</label>

//                 <input
//                     type="radio"
//                     id="angular"
//                     name="sabor"
//                     value="angular"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor="angular">Angular</label>

//                 <input
//                     type="radio"
//                     id="Vue"
//                     name="sabor"
//                     value="Vue"
//                     onChange={(e) => setSabor(e.target.value)}
//                 />
//                 <label htmlFor="Vue">Vue Js</label>

//                 <p>Elige tu lenguake de programacion favorito</p>
//                 <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
//                     <option value="">---</option>
//                     <option value="js">Javascript</option>
//                     <option value="php">PHP</option>
//                     <option value="go">GO</option>
//                     <option value="ruby">Ruby</option>
//                 </select>
//                 <br />

//                 <label htmlFor="terminos">Acepto terminos y condiciones</label>
//                 <input
//                     type="checkbox"
//                     id='terminos'
//                     name='terminos'
//                     onChange={(e) => setTerminos(e.target.checked)}
//                 />

//                 <input type="submit" />
//             </form>
//         </>
//     )
// }

export const Formularios = () => {

    const [form, setForm] = useState({});

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleChecked = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se a enviado');
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <label htmlFor="nombre">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                />

                <p>Elige tu sabor JS favorito</p>

                <input
                    type="radio"
                    id="vanilla"
                    name="sabor"
                    value="vanilla"
                    onChange={handleChange}
                />
                <label htmlFor="vanilla">Vanilla</label>

                <input
                    type="radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="react">ReactJs</label>

                <input
                    type="radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>

                <input
                    type="radio"
                    id="Vue"
                    name="sabor"
                    value="Vue"
                    onChange={handleChange}
                />
                <label htmlFor="Vue">Vue Js</label>

                <p>Elige tu lenguake de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">Javascript</option>
                    <option value="php">PHP</option>
                    <option value="go">GO</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br />

                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                    type="checkbox"
                    id='terminos'
                    name='terminos'
                    onChange={handleChecked}
                />

                <input type="submit" />
            </form>
        </>
    )
}
