import { FC, useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Statistic,
  Progress,
  Divider,
} from "antd";
const { Text } = Typography;
import styles from "./Dashboard.module.css";

interface ReportProgress {
  key: string;
  name: string;
  total: number;
}

interface Source {
  source: string;
  total: number;
}

const reportData: Array<ReportProgress> = [
  { key: "reported", name: "Reported", total: 0 },
  { key: "inProgress", name: "In-progress", total: 3 },
  { key: "close", name: "Close", total: 3 },
];

const reportSources: Array<Source> = [
  { source: "mobile", total: 1 },
  { source: "line", total: 0 },
  { source: "website", total: 3 },
  { source: "fanpage", total: 1 },
  { source: "twitter", total: 0 },
  { source: "other", total: 8 },
];

const Dashboard: FC<{}> = () => {
  const [reportProgress, setReportProgress] = useState<Array<ReportProgress>>();
  const [sources, setSources] = useState<Array<Source>>();
  const [publicWeb, setPublicWeb] = useState<number>(0);
  const [darkWeb, setDarkWeb] = useState<number>(0);

  useEffect(() => {
    setReportProgress(reportData);
    setSources(reportSources);
    setPublicWeb(12);
    setDarkWeb(1);
  }, []);

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Layout>
          <Row gutter={8}>
            {reportProgress?.map((v) => {
              return (
                <Col span={8} key={v.key}>
                  <Card bordered={false}>
                    <Statistic title={v.name} value={v.total} />
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className={styles.data_wrapper}>
              <Card bordered={false}>
                <Row gutter={16}>
                  {sources?.map((v: Source) => {
                    return (
                      <Col span={12} key={v.source}>
                        <Text>
                          {v.source} ({v.total})
                        </Text>
                        <Progress percent={v.total} showInfo={false} />
                      </Col>
                    );
                  })}
                </Row>
              </Card>
            </Col>
          </Row>
        </Layout>
      </Col>
      <Col span={12}>
        <Card
          bordered={false}
          className={styles.summary_wrapper}
          bodyStyle={{ height: "100%" }}
        >
          <Card.Grid className={styles.summary_card}>
            <>
              <Progress
                type="circle"
                percent={publicWeb}
                format={(percent) => `${percent}`}
                style={{ marginBottom: 12 }}
              />
              <Text>Public</Text>
            </>
          </Card.Grid>
          <Card.Grid className={styles.summary_card}>
            <>
              <Progress
                type="circle"
                percent={darkWeb}
                format={(percent) => `${percent}`}
                status="exception"
                style={{ marginBottom: 12 }}
              />
              <Text>Dark Web</Text>
            </>
          </Card.Grid>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
