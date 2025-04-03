import FileUpload from "./uploader";

function UploadBanner({ stateName, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center relative">
        <p className="text-lg font-semibold">{`Haven't visited ${stateName} yet!`}</p>
        <FileUpload stateName={stateName} onClose={onClose}/>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default UploadBanner;
