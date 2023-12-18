import musicProduct from "../data/MusicData"
 
function Products() {
  return (
    <section>
      <h2>hello</h2>
      <div className="products">
    {musicProduct.map((product)=>{
        return <article key={product.id}>
        {product.Artist_Name} 
        </article>
    })}
      </div>
    </section>
  )
}

export default Products
