import axios from "axios";
import { useEffect, useState } from "react";


const MediaTag = () => {
    const [totalSource, setTotalSource] = useState(1)
    const submitMediaTag = async (event: any) => {
        event.preventDefault();
        const source = event.target.source
        const mediatag = event.target.mediatag
        let data = []
        for (let i = 0; i < source.length; i++){
            if (source[i].value === ""){
                continue
            }

            data.push({
                "source": source[i].value,
                "media_tags": mediatag[i].value != "" ? mediatag[i].value.split(", ") : ""
            })
        }
    }

    const addSource = () => {
        setTotalSource(totalSource + 1)
    }

    const deleteTag = (id: string) => {
        document.getElementById(id)?.remove()
    }

    return (
        <main>
            <div className="container col-xl-12 col-xxl-10 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-3 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">CSV MediaTag</h1>
                        <p className="col-lg-10 fs-4">Yuk rapihkan data kalian</p>
                    </div>

                    <div className="col-md-10 mx-auto col-lg-9">
                        <form className="p-4 p-md-5 border rounded-3" onSubmit={submitMediaTag}>
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="floatingInput">Source</label>
                                </div>
                                <div className="col-8">
                                    <label htmlFor="floatingPassword">Media Tag</label>
                                </div>
                            </div>
                            {Array.from(Array(totalSource), (e, i) => {
                                return (
                                    <div className="row gx-4 justify-content-between align-items-center mb-2" id={"source-form-"+i}>
                                        <div className="col-3">
                                            <input type="text" className="form-control" name="source" key={"source"+i} id="floatingInput" placeholder="sourcenya"/>
                                        </div>
                                        <div className="col-7">
                                            <input type="text" className="form-control" name="mediatag" id="floatingPassword" placeholder="Data dipisah menggunakan koma bukan titik anjing!"/>
                                        </div>
                                        <div className="col-2">
                                        { i !== 0 ? <button className="w-100 btn btn-danger" type="button" onClick={() => deleteTag("source-form-"+i)}><i className="bi bi-dash-circle"></i> Hapus</button> : ""}
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="row mt-2 gx-2 justify-content-between">
                                <div className="col-3">
                                    <button className="btn btn-success" type="button" onClick={addSource}><i className="bi bi-plus-circle"></i> Tambah source</button>
                                </div>
                                <div className="col-8">
                                    <button className="w-100 btn btn-primary" type="submit">Input data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MediaTag