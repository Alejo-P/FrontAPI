const IncidentFormPage = () => {
  return (
    <div>
        <h1>IncidentFormPage</h1>

        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required/>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" required/>

            <label htmlFor="severity">Severity</label>
            <input type="text" id="severity" name="severity" required/>

            <label htmlFor="status">Status</label>
            <input type="text" id="status" name="status" required/>

            <label htmlFor="created">Created</label>
            <input type="text" id="created" name="created" required/>

            <label htmlFor="updated">Updated</label>
            <input type="text" id="updated" name="updated" required/>

            <label htmlFor="closed">Closed</label>
            <input type="text" id="closed" name="closed" required/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default IncidentFormPage