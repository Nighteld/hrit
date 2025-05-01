import { Upload } from "lucide-react";

interface Upload {
  name: string;
  title: string;
  fileName: string;
  previewUrl: string;
  imageName: string | null;
  // imageName: File | null;
  error: string | null;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({
  name,
  title,
  fileName,
  previewUrl,
  imageName,
  error,
  handleFileUpload,
}: Upload) {
  return (
    <div className="bg-slate-200 drop-shadow-lg rounded-3xl p-6 w-full max-w-md shadow-sm">
      <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer">
        {imageName ? (
          <div className="w-full flex flex-col items-center">
            <img
              src={
                imageName
                  ? `data:image/jpeg;base64,${imageName}`
                  : "/placeholder.svg"
              }
              alt="Preview"
            //   className="w-32 h-32 object-cover rounded-lg mb-2"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <p className="text-lg font-medium">{fileName}</p>
          </div>
        ) : (
          <>
            <div className="bg-[var(--primary)] rounded-full p-3">
              <label htmlFor={name}>
                <Upload className="w-8 h-8 text-white" />
              </label>
            </div>
            <h2 className="text-xl font-medium mt-2">Upload Image </h2>
            <p className="text-gray-500 text-sm">
              Image size must be less than 4MB
            </p>
          </>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <label
        htmlFor={name}
        className="w-full  text-white font-medium py-1.5  rounded-full mt-4 transition-colors bg-[var(--primary)] cursor-pointer block text-center"
      >
        {title}
      </label>

      <input
        type="file"
        id={name}
        // ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
        name={name}
      />
    </div>
  );
}
