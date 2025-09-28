import React from "react"

export default function Vans() {
    let [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("api/vans")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch")
                } else {
                    return response.json()
                }
            }
            )
            .then(data => setVans(data.vans))
    }, [])
    console.log(vans)
    let vanElement = vans.map((van) => {
        return (
            <div key={van.id} className="van-container">
                <img src={van.imageUrl} />
                <div className="content">
                    <p>
                        {van.name}
                    </p>
                    <div>
                        <p>
                            ${van.price}
                            <br />
                            /day
                        </p>
                    </div>
                </div>
                <button className={van.type}>{van.type[0].toUpperCase() + van.type.slice(1)}</button>
            </div>
        )
    })

    return (
        <section className="vans">
            <h1>Explore Our Vans Option</h1>
            <main className="main-container">
                {vanElement}
            </main>
        </section>

    )
}