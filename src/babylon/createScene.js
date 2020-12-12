import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import modelUrl from '../assets/meshes/Xbot.glb'

export default function(canvas, engine) {
  // 创建一个场景scene
  let scene = new BABYLON.Scene(engine)

  // 添加一个相机，并绑定鼠标事件
  let camera = new BABYLON.ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(0, 0, 5),
    scene
  )
  camera.attachControl(canvas, true)

  // 添加一组灯光到场景
  let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene)
  let light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), scene)

  BABYLON.SceneLoader.ImportMeshAsync('', modelUrl, '', scene, undefined, '.glb')

  return scene
}
