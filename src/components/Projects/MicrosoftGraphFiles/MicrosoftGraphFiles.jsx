export const MicrosoftGraphFiles = () => {

  return (
    <>
      FILES

      <mgt-file-list
        excluded-file-extensions=".doc,.pdf"
        enable-file-upload
      ></mgt-file-list>
    </>
  );
};
