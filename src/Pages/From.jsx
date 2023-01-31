import React from 'react'

const From = () => {
    const [fData, setFData] = useState([]);
  return (
    <div>{preview &&
        <Modal open={preview} onClose={openModal}>
        <ReactFormGenerator
                // download_path=""
                // back_action="/"
                // // back_name="Back"
                // answer_data={{}}
                // // action_name="Save"
                // form_action="/"
                // form_method="POST"
                // onSubmit={this._onSubmit}
                // variables={this.props.variables}
                // data={data}
                 />
        </Modal>
        }</div>
  )
}

export default From