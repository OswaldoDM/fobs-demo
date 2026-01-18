

function Modal() {
  return (
    <div className="fixed inset-0 w-full h-full flex flex-col justify-center items-center bg-black/50 z-10">
        <div className="flex flex-col gap-4 bg-white">
            <h5>Title</h5>
            <div>Selector 1</div>
            <div>Selector 2</div>
        </div>
    </div>
  )
}

export default Modal