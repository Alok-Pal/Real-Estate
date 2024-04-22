import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { CloseSvg, DeleteModalSvg } from "../../constants/Data";
import styles from "./index.module.scss";
// ConfirmDelete popup
const ConfirmDelete = (props) => {
  // Inits
  const {
    handleCancel,
    handleOk,
    isModalOpen,
    deleteHandler,
    isAddUserLoading,
    roleStatusChange,
  } = props;

  //   JSX
  return (
    <Modal
      title={
        <div className={styles["confirm-delete-model"]}>
          {roleStatusChange ? (
            <QuestionCircleOutlined
              style={{ color: "#0b78c2", fontSize: "70px" }}
            />
          ) : (
            <DeleteModalSvg />
          )}
          <h4 className={styles["confirm-delete-model__title"]}>
            {roleStatusChange
              ? `Users assigned to this role will not be able to access their accounts!!`
              : `Are you sure you want to delete?`}
          </h4>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      width={500}
      closeIcon={<CloseSvg />}
      footer={[
        <div key={"wrapper"} className={styles["confirm-delete-model__button"]}>
          <Button
            key="ok"
            className={`${styles["confirm-delete-model__button--save"]} ${
              styles["confirm-delete-model__button--btn"] +
              "hoverRemove h-11 text-lg"
            }`}
            style={{
              backgroundColor: "#e74032",
              color: "white",
            }}
            onClick={deleteHandler}
            loading={isAddUserLoading}
          >
            Delete
          </Button>
          <button
            key="cancel"
            onClick={handleCancel}
            className={`${styles["confirm-delete-model__button--cancel"]} ${
              styles["confirm-delete-model__button--btn"] +
              "text-lg rounded h-10 font-bold"
            }`}
          >
            Cancel
          </button>
        </div>
      ]}
    ></Modal>
  );
};

export default ConfirmDelete;
