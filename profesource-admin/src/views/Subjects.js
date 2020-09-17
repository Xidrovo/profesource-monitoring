import React, { useState, useEffect } from 'react'
import Sidebar from "components/Sidebar.js";
import Navbar from "components/Navbar.js";
import axios from "axios";

export default function Subjects() {

    const [materias, setMaterias] = useState([]);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [addM, setAddM] = useState(" ");
    const [addD, setAddD] = useState(" ");
    const [addCa, setAddCa] = useState(" ");
    const [addC, setAddC] = useState(" ");
    const [materia, setMateria] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [carrera, setCarrera] = useState(" ");
    const [ciencia, setCiencia] = useState(" ");
    const [id_Subejct, setId] = useState(" ")
    const [subject_SQL, setSQL] = useState(" ");
    const rows = [];
    useEffect(() => {
        axios.get("http://localhost:3000/api-noSQL/subjects/consult").then((response) => {
            setMaterias(response.data);
        })

    })

    function deleteMateria(id, Subject) {
        console.log("Delete materia with id " + id)
        try {
            axios.delete(`http://localhost:3000/api/subjects/delete/${Subject}`).then((response) => {
                console.log(response)
            })
            axios.delete(`http://localhost:3000/api-noSQL/subjects/delete/${id}`).then((response) => {
                console.log(response);
            })
        } catch (e) {
            alert("Existen datos asociados")

        }



    }

    async function publishSubject() {
        var body = {
            "Materia": addM,
            "Carrera": addCa,
            "Ciencia": addC,
            "Descripcion": addD
        }

        await axios.post('http://localhost:3000/api/subjects/register', { "Subject_name": addM, "status": true }).then((response) => {
            console.log(response)
        })

        await axios.post('http://localhost:3000/api-noSQL/subjects/register', body).then((response) => {
            console.log(response);
        })



    }
    async function updateSubject(id) {
        var body = {
            "Materia": materia,
            "Carrera": carrera,
            "Ciencia": ciencia,
            "Descripcion": desc
        }

        try {
            await axios.put(`http://localhost:3000/api/subjects/update/${subject_SQL}`, { "Subject_name": materia, "status": true }).then((response) => {
                console.log(response)
            })

            console.log(body)
            await axios.put(`http://localhost:3000/api-noSQL/subjects/update/${id}`, body).then((response) => {
                console.log(response)
            })

        } catch (e) {
            alert("Existen valores asociados")
        }


    }

    const save = () => {
        console.log(id_Subejct)
        updateSubject(id_Subejct);
        habilitar()
        setEdit(false)
    }
    const saveNew = () => {
        publishSubject()
        setAddM(" "); setAddC(" "); setAddCa(" "); setAddD(" ");
        habilitar()
        setAdd(false)
    }
    function habilitar() {
        var rows = document.getElementsByTagName("tr");
        for (let element of rows) {
            element.style.pointerEvents = "auto"
        }
    }
    const cancelar = () => {
        setEdit(false);
        setAdd(false);
        habilitar();
    }

    function setInfoSubject(id) {
        var carrera = document.getElementById(id + "-carrera").textContent;
        var ciencia = document.getElementById(id + "-ciencia").textContent;
        var materia = document.getElementById(id + "-name").textContent;
        var desc = document.getElementById(id + "-desc").textContent;
        setMateria(materia); setDesc(desc); setCarrera(carrera); setCiencia(ciencia);
    }

    function editarMateria(id, Subject) {
        setEdit(true)
        setId(id);
        setInfoSubject(id);
        setSQL(Subject);
        var body = document.getElementById("body-table");
        var rows = body.getElementsByTagName("tr");
        var edited = document.getElementById(id);
        for (let element of rows) {
            console.log(element)
            if (element == edited) {

            } else {
                element.style.pointerEvents = "none"
            }
        }

    }

    function loadMaterias() {
        return materias.map((materia, i) => {
            return (


                <tr id={materia._id} class="bg-white" >
                    <td class="border px-4 py-2 text-sm" id={materia._id + "-name"}>{materia.Materia}</td>
                    <td class="border px-4 py-2 text-sm" id={materia._id + "-ciencia"}>{materia.Ciencia}</td>
                    <td class="border px-4 py-2 text-sm" id={materia._id + "-carrera"}>{materia.Carrera}</td>
                    <td class="border px-4 py-2 text-sm" align="justify" id={materia._id + "-desc"}>{materia.Descripcion}</td>
                    <td class="border px-4 py-2 text-sm" id={materia._id + "-accion"}>
                        <div className="flex">
                            <button className="m-2" onClick={() => { editarMateria(materia._id, materia.Materia) }}>
                                <svg
                                    viewBox="0 0 32 32"
                                    width="15"
                                    height="15"
                                >
                                    <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z" />
                                </svg>
                            </button>
                            <button className="m-2" onClick={() => { deleteMateria(materia._id, materia.Materia) }}>
                                <svg
                                    viewBox="0 0 32 32"
                                    width="15"
                                    height="15"
                                >
                                    <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>


            );
        })
    }


    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-200">
                <Navbar />
                <div className="relative bg-gray-600 md:pt-32 pb-16 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-gray-500 uppercase font-bold text-xs">
                                                        Traffic
                                        </h5>
                                                    <span className="font-semibold text-xl text-gray-800">
                                                        350,897
                                        </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                        <i className="far fa-chart-bar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-4">
                                                <span className="text-green-500 mr-2">
                                                    <i className="fas fa-arrow-up"></i> 3.48%
                                        </span>
                                                <span className="whitespace-no-wrap">
                                                    Desde el ultimo mes
                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-gray-500 uppercase font-bold text-xs">
                                                        Nuevos usuarios
                                        </h5>
                                                    <span className="font-semibold text-xl text-gray-800">
                                                        24
                                        </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                                        <i className="fas fa-chart-pie"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-4">
                                                <span className="text-red-500 mr-2">
                                                    <i className="fas fa-arrow-down"></i> 3.48%
                                        </span>
                                                <span className="whitespace-no-wrap">
                                                    Desde el ultimo mes
                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-gray-500 uppercase font-bold text-xs">
                                                        Actuación
                                        </h5>
                                                    <span className="font-semibold text-xl text-gray-800">
                                                        49,65%
                                        </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                                                        <i className="fas fa-percent"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-4">
                                                <span className="text-green-500 mr-2">
                                                    <i className="fas fa-arrow-up"></i> 12%
                                        </span>
                                                <span className="whitespace-no-wrap">
                                                    Desde el ultimo mes
                                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="px-6 ml-4 mt-5 ">
                    <div className="w-full bg-gray-300 p-4">
                        <div className="block md:flex">
                            <div ><h2 className="font-semibold text-gray-900 p-2">¿Deseas agregar una materia?</h2></div>
                            <div className="px-6">
                                <button className="mx-2 bg-gray-600 p-2 rounded-lg text-white text-sm text-semibold"
                                    onClick={() => {
                                        setAdd(true);
                                    }}>Agregar</button>
                            </div>
                        </div>
                        <div className="m-4">
                            {add && <div className="py-4">
                                <table class="table-auto my-4">

                                    <tbody className="w-full">
                                        <tr >
                                            <td class="text-sm text-justify px-4 py-2 font-bold">
                                                Materia
                                    </td>
                                            <td>
                                                <textarea id="edited-materia" rows="1"
                                                    className="p-2 text-sm " onChange={e => setAddM(e.target.value)}>
                                                    {addM}
                                                </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-sm text-justify px-4 py-2 font-bold">
                                                Ciencia
                                    </td>
                                            <td>
                                                <textarea id="edited-ciencia" rows="1"
                                                    className="p-2 text-sm" onChange={e => setAddC(e.target.value)}>

                                                    {addC}
                                                </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-sm text-justify px-4 py-2 font-bold">
                                                Carreras Relacionadas
                                    </td>
                                            <td>
                                                <textarea id="edited-carrera" rows="1"
                                                    className="p-2 text-sm " onChange={e => setAddCa(e.target.value)}>
                                                    {addCa}
                                                </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-sm text-justify font-bold px-4 py-2">
                                                Descripcion
                                    </td>
                                            <td>
                                                <textarea id="edited-des" rows="4"
                                                    className="p-2 text-sm" onChange={e => setAddD(e.target.value)}>
                                                    {addD}
                                                </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm ">
                                                <button className="bg-gray-700 w-full text-white p-2"
                                                    onClick={() => {
                                                        saveNew()
                                                    }}>Guardar</button>
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    cancelar()
                                                }}
                                                    className="bg-gray-700 w-full text-white p-2">Cancelar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>}
                        </div>
                    </div>
                    {edit &&
                        <div className="py-8 w-full">
                            <div className="w-full ">
                                <h4 className="text-gray-900 font-bold px-4">Editando Materia</h4>
                            </div>
                            <table class="table-auto my-4">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-justify"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td class="text-sm text-justify px-4 py-2">
                                            Materia
                                    </td>
                                        <td>
                                            <textarea id="edited-materia" rows="1"
                                                className="p-2 text-sm" onChange={e => setMateria(e.target.value)}
                                                defaultValue={materia}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-sm text-justify px-4 py-2">
                                            Ciencia
                                    </td>
                                        <td>
                                            <textarea id="edited-ciencia" rows="1"
                                                className="p-2 text-sm" onChange={e => setCiencia(e.target.value)}
                                                defaultValue={ciencia}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-sm text-justify px-4 py-2">
                                            Carreras Relacionadas
                                    </td>
                                        <td>
                                            <textarea id="edited-carrera" rows="1"
                                                className="p-2 text-sm" onChange={e => setCarrera(e.target.value)}
                                                defaultValue={carrera}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-sm text-justify px-4 py-2">
                                            Descripcion
                                    </td>
                                        <td>
                                            <textarea id="edited-des" rows="2"
                                                className="p-2 text-sm" onChange={e => setDesc(e.target.value)}
                                                defaultValue={desc}>

                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm ">
                                            <button className="bg-gray-700 w-full text-white p-2 rounded-lg"
                                                onClick={() => {
                                                    save()
                                                }}>Guardar</button>
                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                cancelar()
                                            }}
                                                className="bg-gray-700 w-full text-white p-2 rounded-lg">Cancelar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>}

                    <table class="table-auto my-4">
                        <thead class="bg-gray-900  " >
                            <tr >
                                <th class="border-solid border-4 border-white px-4 py-2 text-white">Materia</th>
                                <th class="border-solid border-4 border-white px-4 py-2 text-white">Ciencias</th>
                                <th class="border-solid border-4 border-white px-4 py-2 text-white">Carreras Relacionadas</th>
                                <th class="border-solid border-4 border-white px-4 py-2 text-white">Descripción</th>
                                <th class="border-solid border-4 border-white px-4 py-2 text-white">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="body-table">

                            {loadMaterias()}
                        </tbody>
                    </table>
                </div>





                <footer className="block py-4">
                    <div className="container mx-auto px-4">
                        <hr className="mb-4 border-b-1 border-gray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4">
                                <div className="text-sm text-gray-600 font-semibold py-1">
                                    Copyright © {new Date().getFullYear()}{" "}
                                    <a
                                        href="https://www.creative-tim.com"
                                        className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                                    >
                                        Creative Tim
                                    </a>
                                </div>
                            </div>
                            <div className="w-full md:w-8/12 px-4">
                                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                    <li>
                                        <a
                                            href="https://www.creative-tim.com"
                                            className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                        >
                                            Creative Tim
                                    </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.creative-tim.com/presentation"
                                            className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                        >
                                            About Us
                                    </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://blog.creative-tim.com"
                                            className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                        >
                                            Blog
                                    </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                                            className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                        >
                                            MIT License
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )

}