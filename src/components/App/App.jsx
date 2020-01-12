import React, { useEffect } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import icon from "../icon";
import Slider from "./Slider";

export default ({ fetch, currently, daily }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Updated>Обновлено - {new Date(currently.time).toTimeString()}</Updated>
      <Main>
        <Center>
          <City>Кемерово</City>
          <DateTime>{new Date().toLocaleString()}</DateTime>
          <Summary>{currently.summary} </Summary>
          <Inline>
            <Preview>{<Icon size={6} path={icon(currently.icon)} />}</Preview>
            <div>
              <Temperature>{currently.temperature}°C</Temperature>
              <Feels>Ощущается как {currently.apparentTemperature}°C</Feels>
            </div>
          </Inline>
        </Center>
        <Center>
          <Daily>
            <Summary>На неделе: {daily.summary}</Summary>
            {daily.data.length > 0 && (
              <Slider>
                {daily.data.map(e => (
                  <Day key={e.time}>
                    {new Date(e.time * 1000).toLocaleDateString().slice(0, 5)}
                    <DailyTemperature>
                      {Math.floor(e.temperatureMin)}/
                      {Math.floor(e.temperatureMax)}
                    </DailyTemperature>
                    <DailySummary>{e.summary}</DailySummary>
                    <Preview>{<Icon size={3} path={icon(e.icon)} />}</Preview>
                  </Day>
                ))}
              </Slider>
            )}
          </Daily>
        </Center>
      </Main>
    </Container>
  );
};

const DailySummary = styled.div`
  padding: 0 12px;
  font-size: 1.375rem;
  height: 70px;
`;

const Daily = styled.div`
  width: 320px;
`;

const DailyTemperature = styled.div`
  padding: 22px 0;
  user-select: none;
  font-size: 3.2rem;
`;

const Day = styled.div`
  width: 240px;
  height: 320px;
  padding: 16px 0;
  user-select: none;
  cursor: e-resize;
  margin-right: 16px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(120, 120, 120, 0.1);
  background: rgba(186, 186, 186, 0.3);
`;

const Feels = styled.div`
  font-size: 1.5rem;
  padding-left: 12px;
  white-space: pre;
  padding-top: 2px;
`;

const City = styled.div`
  color: white;
  margin-bottom: 12px;
  font-size: 1.375rem;
`;

const DateTime = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.3rem;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 1.375rem;
  text-align: center;
  color: #f4f4f4;
  fill: #f4f4f4;
`;

const Inline = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Temperature = styled.div`
  padding: 32px 0 0 0;
  font-size: 4.5rem;
`;

const Updated = styled.div`
  font-size: 0.875rem;
  padding: 8px 0;
  opacity: 0.6;
`;

const Preview = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: center;
  width: 100%;
`;

const Summary = styled.div`
  text-align: center;
  padding: 18px 0;
`;
