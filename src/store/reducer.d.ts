import {AuthReducerTypes} from "@store/auth/auth";
import {AlertReducerTypes} from "@store/alert/alert";
import {ConsultReducerTypes} from "@store/consult/consult";
import {EncounterReducerTypes} from "@store/encounter/encounter";
import {LabPrescriptionReducerTypes} from "@store/encounter/lab-prescription/lab-prescription";
import {DrugPrescriptionReducerTypes} from "@store/encounter/drug-prescription/drug-prescription";

export interface ReducerTypes {
  auth: AuthReducerTypes
  alert: AlertReducerTypes
  consult: ConsultReducerTypes
  encounter: EncounterReducerTypes
  labPrescription: LabPrescriptionReducerTypes
  drugPrescription: DrugPrescriptionReducerTypes
}