import TRUCK_DATA from '../assets/Mobile_Food_Facility_Permit.json';
import { RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import foodTruckIcon from "../assets/food-truck-svgrepo-com.svg";
import foodCartIcon from "../assets/food-truck-svgrepo-com.svg"
import '../styles/food-trucks.css'

const generateTruckFeatures = (): JSX.Element[] => {
    const truckPoints: JSX.Element[] = [];
    TRUCK_DATA.features.forEach(feature => {
        const icon = feature.properties.FacilityType === 'Push Cart' ? foodCartIcon : foodTruckIcon;

        const truckFeature = (
            <RFeature geometry={new Point(fromLonLat(feature.geometry.coordinates))}>
                <RStyle.RStyle>
                    <RStyle.RIcon src={icon} scale={0.05}></RStyle.RIcon>
                </RStyle.RStyle>
                <ROverlay className="food-trucks-overlay">
                    {feature.properties.Applicant}
                </ROverlay>
            </RFeature>
        );


        truckPoints.push(truckFeature)
    });

    return truckPoints;
};

export const createTruckLayer = (): JSX.Element => {
    const points = generateTruckFeatures();

    const layer = (
        <RLayerVector zIndex={10} >
            {points}
        </RLayerVector>
    );

    return layer;
}
