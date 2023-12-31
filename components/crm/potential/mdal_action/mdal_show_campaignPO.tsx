import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import ModalCompleteStep from "@/components/crm/quote/quote_steps/complete_modal";
import CampaignInputGroupsModal from "../detail/campaign_input_modal";
import TableDataCampaignModal from "@/components/crm/table/table_data_campain_modal";

const ShowCampaignPOMD = (props: any) => {
  const { isModalCancelPO, onClose } = props;
  const [showMdalAdd, setIsShowMdalADd] = useState(false);
  const router = useRouter();
  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        width={750}
        title={
          <div
            style={{
              background: "#4C5BD4",
              width: "107%",
              margin: "-20px -30px",
            }}
          >
            <div style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Chọn chiến dịch
            </div>
          </div>
        }
        centered
        open={isModalCancelPO}
        onOk={() => onClose()}
        onCancel={() => onClose()}
        okText="Đồng ý"
        cancelText="Huỷ"
        footer={
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ width: "100px" }} onClick={() => onClose()}>
              <Button style={{ width: 150 }}>Hủy</Button>
            </div>
            <div
              style={{ width: "100px" }}
              onClick={() => (setIsShowMdalADd(true), router.reload())}
            >
              <Button
                style={{ width: 150, color: "#fff", background: "#4C5BD4" }}
              >
                Đồng ý
              </Button>
            </div>
          </div>
        }
      >
        <ModalCompleteStep
          modal1Open={showMdalAdd}
          setModal1Open={setIsShowMdalADd}
          title={`Thêm khách hàng vào chiến dịch thành công`}
          link={"#"}
        />

        <div style={{ paddingTop: 30 }}>
          <CampaignInputGroupsModal />
        </div>
        <TableDataCampaignModal />
      </Modal>
    </>
  );
};

export default ShowCampaignPOMD;
