export default function app() {
  return (
    <div>
      <mycomponent />
    </div>
  );
}
function mycomponent() {
  const headapp = " my chat app";
  const studentname = "Piyush Jagtap ";
  const studentid = "2109405200057"
  return;

  <div>
    <div classname="row bg-secondary p-3">
      <div class name="col fs-1"> {headerapp}</div>
      <div>
        {studentid}{studentname}
      </div>
    </div>
    <div classname="row">
      <div classname="col-10 p-1">
        <input
          type="text"
          name=" "
          id=" "
          placeholder="lets talk.."
          classname="from-control w-100"
        />
      </div>
      <div classname="col-2 p-1">
        
        <input type="button" value="send" classname="form-control" 
        onclick = {sendmessage}
        />

      </div >
    </div >
  </div >
};