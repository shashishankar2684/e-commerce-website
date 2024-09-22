"use server"

import { db } from "@/db"
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client"


export type SaveConfigArgs = {
    color: CaseColor
    finish: CaseFinish
    material: CaseMaterial
    model: PhoneModel
    configID: string
}

export async function saveConfig({
    color,
    finish,
    material,
    model,
    configID,
}: SaveConfigArgs ) {
    await db.configuration.update({
        where: { id: configID },
        data: { color, finish, material, model}
    })
}