import AWS from "aws-sdk";

export const useUploadImage = async (e: any, quillRef?:any, t?:any) => {
  const file = e.target.files?.[0];
  const fileName = file.name;
  if (!file) return;
  if (file) {
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'codecapi-portal',
      Key: fileName,
      Body: file,
    };

    s3.upload(
      params,
      (err: Error | null, data: AWS.S3.ManagedUpload.SendData) => {
        if (err) {
          console.log(err);
          t('toast.fail.image');
        } else {
          const imageUrl = data.Location;
          const range = quillRef?.current?.getEditor().getSelection(true);
          if (range) {
            quillRef?.current?.getEditor()
              .insertEmbed(range.index, 'image', imageUrl);
          }
        }
      }
    );
  }
};