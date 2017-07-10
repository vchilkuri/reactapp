import React from 'react';
import axios from 'axios';




class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vitals: [],
      loading: true,
      error: null
    };
  }



  componentWillMount() {


  var that = this;
  axios.all([
    axios.get(`http://www.hl7.org/fhir/observation-example.json`),
    axios.get(`http://www.hl7.org/fhir/patient-example.json`),
    axios.get(`http://www.hl7.org/fhir/encounter-example.json`)
  ])
  .then(axios.spread(function (res, res2, res3) {
    const status = res.data.status;
    const subject = res2.data.name;
    const encounter = res3.data.status;
    const vitals = res.data.category.coding;
    const codes = res.data.code.coding;
    const value = res.data.valueQuantity.value;
    const id = res.data.id;
    that.setState({
    vitals, codes, value,status,subject,encounter,id,
    loading: false,
    error: null
  })
  }))
  .catch(err => {
    this.setState({
      loading: false,
      error: err
    });
  });
}

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  rendervitals() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <div>

      <div id="/">

      <form>
      <div className="form-group" key={this.state.id}>
            <label className="control-label col-sm-12 " htmlFor="id">id</label>
            <div className="col-sm-4">
            <input id="id" name="id" type="text" placeholder="id number" className="form-control input-md" value={this.state.id}  readOnly="readonly"/>


            </div>
      </div>
      <div className="form-group" key={this.state.status}>
            <label className="control-label col-sm-12" htmlFor="status">status</label>
            <div className="col-sm-8 col-md-4">
            <input id="status" name="status" type="text" placeholder="status" className="form-control input-md" value={this.state.status}  readOnly="readonly"/>


            </div>
          </div>

        {this.state.subject.map(subject =>
          <div className="form-group" key="official">

            <label className="control-label col-sm-12" htmlFor="givenname">Given Name</label>
            <div className="col-sm-8 col-md-4">
            <input id="givenname" name="givenname" type="text" placeholder="givenname" className="form-control input-md" value={subject.given}  readOnly="readonly"/>
            </div>
            <label className="control-label col-sm-12" htmlFor="familyname">Family Name</label>
            <div className="col-sm-8 col-md-4">
            <input id="familyname" name="familyname" type="text" placeholder="familyname" className="form-control input-md" value={subject.family}  readOnly="readonly"/>
            </div>
            </div>
          )}



          <div className="form-group" key={this.state.encounter}>
                <label className="control-label col-sm-12" htmlFor="encounter">encounter</label>
                <div className="col-sm-8 col-md-4">
                <input id="encounter" name="encounter" type="text" placeholder="encounter" className="form-control input-md" value={this.state.encounter}  readOnly="readonly"/>

                </div>
              </div>

      {this.state.codes.map(code =>

          <div className="form-group" key="http://loinc.org">
                <label className="control-label col-sm-12" htmlFor="coding">coding</label>
                <div className="col-sm-8 col-md-4">
                <input id="coding" name="coding" type="text" placeholder="coding" className="form-control input-md" value={code.code}  readOnly="readonly"/>
                </div>
              </div>
        )}
        <div className="form-group" key={this.state.value}>
              <label className="control-label col-sm-12" htmlFor="value">value</label>
              <div className="col-sm-8 col-md-4">
              <input id="value" name="value" type="text" placeholder="value" className="form-control input-md" value={this.state.value}  readOnly="readonly"/>


              </div>
            </div>

      </form>

      </div>
      </div>
    );

  };


  render() {
    return (
      <div>
        {this.state.loading ?
          this.renderLoading()
          : this.rendervitals()}
      </div>
    );
  }
}

class Contact extends React.Component{
  render() {
      return (
        <div>
        <form className="form-horizontal" id="obsreg.html">
        <fieldset>



        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="id">id</label>
          <div className="col-md-4">
          <input id="id" name="id" type="text" placeholder="id" className="form-control input-md" required=""/>

          </div>
        </div>


        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="status">status</label>
          <div className="col-md-4">
          <input id="status" name="status" type="text" placeholder="status" className="form-control input-md" required=""/>

          </div>
        </div>


        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="givenname">Given Name</label>
          <div className="col-md-4">
          <input id="givenname" name="givenname" type="text" placeholder="Given Name" className="form-control input-md" required=""/>

          </div>
        </div>


        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="familyname">Family Name</label>
          <div className="col-md-4">
          <input id="familyname" name="familyname" type="text" placeholder="Family Name" className="form-control input-md" required=""/>

          </div>
        </div>


        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="encounter">Encounter</label>
          <div className="col-md-4">
          <input id="encounter" name="encounter" type="text" placeholder="encounter" className="form-control input-md"/>

          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="coding">coding</label>
          <div className="col-md-4">
          <input id="coding" name="coding" type="text" placeholder="coding" className="form-control input-md"/>

          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="value">value</label>
          <div className="col-md-4">
            <div className="input-group">
              <input id="value" name="value" className="form-control" placeholder="weight" type="text"/>
              <span className="input-group-addon">lbs</span>
            </div>

          </div>
        </div>
        </fieldset>
        </form>

        </div>
      );
    }
};

class Nav extends React.Component{
  render() {
      return (
        <div>
        <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Obs Component</a>
      </div>
      <ul className="nav navbar-nav">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">New Obs</a></li>
      </ul>
    </div>
  </nav>
        </div>
      );
    }
};

export {FetchDemo};
export {Nav};
export {Contact};
